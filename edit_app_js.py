import re
import shutil
from pathlib import Path
import tkinter as tk
from tkinter import ttk, filedialog, messagebox

from deep_translator import GoogleTranslator


class TranslationEditor:
    def __init__(self, root: tk.Tk):
        self.root = root
        self.root.title("Редактор переводов app.js")
        self.root.geometry("920x680")

        self.file_path: Path | None = None
        self.file_text: str = ""
        self.ru_block: str = ""
        self.en_block: str = ""
        self.ru_data: dict[str, str] = {}
        self.en_data: dict[str, str] = {}

        self.build_ui()

    def build_ui(self):
        top = ttk.Frame(self.root, padding=12)
        top.pack(fill="x")

        ttk.Button(top, text="Открыть app.js", command=self.open_js_file).pack(side="left")
        self.file_label = ttk.Label(top, text="Файл не выбран")
        self.file_label.pack(side="left", padx=12)

        main = ttk.Frame(self.root, padding=12)
        main.pack(fill="both", expand=True)

        ttk.Label(main, text="Ключ").grid(row=0, column=0, sticky="w")
        self.key_var = tk.StringVar()
        self.key_combo = ttk.Combobox(main, textvariable=self.key_var, state="readonly", width=50)
        self.key_combo.grid(row=0, column=1, sticky="ew", padx=8)
        self.key_combo.bind("<<ComboboxSelected>>", self.load_selected_key)

        ttk.Label(main, text="Новый русский текст").grid(row=1, column=0, sticky="nw", pady=(12, 0))
        self.ru_text = tk.Text(main, height=8, wrap="word")
        self.ru_text.grid(row=1, column=1, sticky="nsew", padx=8, pady=(12, 0))

        btns = ttk.Frame(main)
        btns.grid(row=2, column=1, sticky="w", padx=8, pady=10)

        ttk.Button(btns, text="Перевести в EN", command=self.translate_en).pack(side="left")
        ttk.Button(btns, text="Применить", command=self.apply_changes).pack(side="left", padx=8)
        ttk.Button(btns, text="Обновить текущий ключ", command=self.load_selected_key).pack(side="left")

        ttk.Label(main, text="English text").grid(row=3, column=0, sticky="nw", pady=(12, 0))
        self.en_text = tk.Text(main, height=8, wrap="word")
        self.en_text.grid(row=3, column=1, sticky="nsew", padx=8, pady=(12, 0))

        ttk.Label(main, text="Лог").grid(row=4, column=0, sticky="nw", pady=(12, 0))
        self.log = tk.Text(main, height=14, wrap="word", state="disabled")
        self.log.grid(row=4, column=1, sticky="nsew", padx=8, pady=(12, 0))

        main.columnconfigure(1, weight=1)
        main.rowconfigure(1, weight=1)
        main.rowconfigure(3, weight=1)
        main.rowconfigure(4, weight=1)

    def log_write(self, text: str):
        self.log.config(state="normal")
        self.log.insert("end", text + "\n")
        self.log.see("end")
        self.log.config(state="disabled")

    def open_js_file(self):
        path = filedialog.askopenfilename(
            title="Выбери app.js",
            filetypes=[("JavaScript", "*.js"), ("All files", "*.*")]
        )
        if not path:
            return

        self.file_path = Path(path)
        self.file_text = self.file_path.read_text(encoding="utf-8")
        self.file_label.config(text=str(self.file_path))

        try:
            self.ru_block = self.extract_lang_block(self.file_text, "ru")
            self.en_block = self.extract_lang_block(self.file_text, "en")
            self.ru_data = self.parse_pairs(self.ru_block)
            self.en_data = self.parse_pairs(self.en_block)
        except Exception as e:
            messagebox.showerror("Ошибка", f"Не удалось распарсить файл:\n{e}")
            return

        keys = sorted(set(self.ru_data.keys()) & set(self.en_data.keys()))
        if not keys:
            messagebox.showerror("Ошибка", "Не найдены общие ключи в ru/en.")
            return

        self.key_combo["values"] = keys
        self.key_combo.current(0)
        self.load_selected_key()
        self.log_write(f"Открыт файл: {self.file_path}")
        self.log_write(f"Найдено ключей: {len(keys)}")

    def load_selected_key(self, event=None):
        key = self.key_var.get()
        if not key:
            return

        self.ru_text.delete("1.0", "end")
        self.ru_text.insert("1.0", self.ru_data.get(key, ""))

        self.en_text.delete("1.0", "end")
        self.en_text.insert("1.0", self.en_data.get(key, ""))

    def translate_en(self):
        ru_value = self.ru_text.get("1.0", "end").strip()
        if not ru_value:
            messagebox.showwarning("Пусто", "Сначала введи русский текст.")
            return

        try:
            translated = GoogleTranslator(source="ru", target="en").translate(ru_value)
        except Exception as e:
            messagebox.showerror("Ошибка перевода", str(e))
            return

        self.en_text.delete("1.0", "end")
        self.en_text.insert("1.0", translated)
        self.log_write("Перевод выполнен.")

    def apply_changes(self):
        if not self.file_path:
            messagebox.showwarning("Нет файла", "Сначала открой app.js.")
            return

        key = self.key_var.get().strip()
        if not key:
            messagebox.showwarning("Нет ключа", "Выбери ключ.")
            return

        ru_new = self.ru_text.get("1.0", "end").strip()
        en_new = self.en_text.get("1.0", "end").strip()

        if not ru_new or not en_new:
            messagebox.showwarning("Пусто", "Оба поля должны быть заполнены.")
            return

        preview = (
            f"Ключ: {key}\n\n"
            f"RU:\n{ru_new}\n\n"
            f"EN:\n{en_new}\n\n"
            f"Вставить в app.js?"
        )
        ok = messagebox.askyesno("Подтверждение", preview)
        if not ok:
            self.log_write("Изменение отменено.")
            return

        backup_path = self.file_path.with_suffix(self.file_path.suffix + ".bak")
        shutil.copy2(self.file_path, backup_path)

        updated = self.replace_value(self.file_text, "ru", key, ru_new)
        updated = self.replace_value(updated, "en", key, en_new)

        self.file_path.write_text(updated, encoding="utf-8")
        self.file_text = updated
        self.ru_data[key] = ru_new
        self.en_data[key] = en_new

        self.log_write(f"Сохранено. Бэкап: {backup_path.name}")
        messagebox.showinfo("Готово", "Изменения записаны в файл.")

    @staticmethod
    def extract_lang_block(file_text: str, lang: str) -> str:
        start_match = re.search(rf"{lang}\s*:\s*\{{", file_text)
        if not start_match:
            raise ValueError(f"Блок {lang} не найден.")

        start_brace = start_match.end() - 1
        end_brace = TranslationEditor.find_matching_brace(file_text, start_brace)
        return file_text[start_brace + 1:end_brace]

    @staticmethod
    def find_matching_brace(text: str, open_index: int) -> int:
        depth = 0
        in_string = False
        quote = ""
        escaped = False

        for i in range(open_index, len(text)):
            ch = text[i]

            if in_string:
                if escaped:
                    escaped = False
                elif ch == "\\":
                    escaped = True
                elif ch == quote:
                    in_string = False
                continue

            if ch in ("'", '"', "`"):
                in_string = True
                quote = ch
                continue

            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    return i

        raise ValueError("Не найдена закрывающая скобка для блока.")

    @staticmethod
    def parse_pairs(block: str) -> dict[str, str]:
        # Ловит пары вида:
        # heroLead: '...'
        # navAbout: '...'
        pattern = re.compile(
            r"(?P<key>[A-Za-z0-9_]+)\s*:\s*'(?P<value>(?:\\.|[^'])*)'",
            re.DOTALL
        )

        data = {}
        for m in pattern.finditer(block):
            key = m.group("key")
            value = m.group("value")
            value = value.replace("\\'", "'").replace("\\n", "\n").replace("\\\\", "\\")
            data[key] = value

        if not data:
            raise ValueError("Не удалось распарсить пары key: 'value'")
        return data

    @staticmethod
    def escape_js_single_quote(text: str) -> str:
        return (
            text.replace("\\", "\\\\")
                .replace("'", "\\'")
                .replace("\n", "\\n")
        )

    def replace_value(self, file_text: str, lang: str, key: str, new_value: str) -> str:
        escaped = self.escape_js_single_quote(new_value)

        block_match = re.search(rf"{lang}\s*:\s*\{{", file_text)
        if not block_match:
            raise ValueError(f"Блок {lang} не найден")

        start_brace = block_match.end() - 1
        end_brace = self.find_matching_brace(file_text, start_brace)

        before = file_text[:start_brace + 1]
        block = file_text[start_brace + 1:end_brace]
        after = file_text[end_brace:]

        pair_pattern = re.compile(
            rf"({re.escape(key)}\s*:\s*')((?:\\.|[^'])*)(')",
            re.DOTALL
        )

        if not pair_pattern.search(block):
            raise ValueError(f"Ключ {key} не найден в блоке {lang}")

        new_block = pair_pattern.sub(rf"\1{escaped}\3", block, count=1)
        return before + new_block + after


if __name__ == "__main__":
    root = tk.Tk()
    app = TranslationEditor(root)
    root.mainloop()
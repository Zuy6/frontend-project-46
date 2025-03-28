### Hexlet tests and linter status:
[![Actions Status](https://github.com/Zuy6/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Zuy6/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/61c12de62f218256b95f/maintainability)](https://codeclimate.com/github/Zuy6/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/61c12de62f218256b95f/test_coverage)](https://codeclimate.com/github/Zuy6/frontend-project-46/test_coverage)

# Описание

**Вычислитель отличий (gendiff)** – программа, определяющая разницу между двумя структурами данных.

## Программма имеет следующие особенности:
- Поддерживаниет форматы JSON и YAML файлов для сравнения;
- Имеет возможность различных выводов в форматах json, plain, stylish (по умолчанию).

# Инструкция по установке и запуску игр

- минимальные системные требования (версия ноды и npm):
    - version node:v19.9.0 или выше.
    - version npm:v9.6.3 или выше.

- Для установки используйте команды(необходимо запускать из корневой директории проекта).
    - ```make install```
    - ```npm link```

# Пользование программой

## Справочная информация
- `gendiff -h` - помощь.
- `gendiff -V` - версия проекта.
- `gendiff <filepath1> <filepath2> [--format <format>]` - начало работы с проектом.
- `make test` - запуск тестов.
- `make lint` - проверка стиля кода.
[![Демонстрация](https://asciinema.org/a/1CJ8zzKO7n6bHxh7O2YV4Rc2V.svg)](https://asciinema.org/a/1CJ8zzKO7n6bHxh7O2YV4Rc2V)

## Сравнение файлов (Демонстрация работы)
[![Демонстрация](https://asciinema.org/a/Mx0t0FNVZHsDoJCHBwgH2KmQK.svg)](https://asciinema.org/a/Mx0t0FNVZHsDoJCHBwgH2KmQK)
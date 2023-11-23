# Neobiz test
This is an implementation for Neobiz's software developer test

## Requirements
- [Python](https://www.python.org/) ^3.9.2
- [pip](https://pip.pypa.io/en/stable/)
- [venv](https://docs.python.org/pt-br/3/library/venv.html)

## Setup
1. Setup python virtual environment
```bash
python -m venv venv
```

2. Activate the virtual environment
```bash
source venv/bin/activate
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

## Execute
If the virtual environment is not installed, activate it:
```bash
source venv/bin/activate
```

To run the html page on a local server, run:
```bash
python -m http.server
```

Now, access http://localhost:8000 on your browser.

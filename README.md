# Neobiz test
This is an implementation for Neobiz's software developer test.

Check it out at [https://matmatias.github.io/test.neobiz/](https://matmatias.github.io/test.neobiz/).

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

## Run the web page locally
If the virtual environment is not installed, activate it:
```bash
source venv/bin/activate
```

To run the html page on a local server, run:
```bash
python -m http.server
```

Now, access http://localhost:8000 on your browser.

## Run the questions 2 and 3 Scripts locally
If you wish to execute the javascript scripts locally, you will need [NodeJS](https://nodejs.org/en)

To execute question 2 script, run:
```bash
node src/question_2.js
```

To execute question 3 script, run:
```bash
node src/question_3.js
```

The script from question 5 cannot be run because I didn't bother to setup a database with Docker, for example. This can be done in the future, but I do not guarantee that I'll do it.

I also could have setup Docker to use python and nodejs in this project, but I didn't bother to do it for now.

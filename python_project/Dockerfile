FROM python

#destinato directory
WORKDIR /containers/pythonproject/flask-app 

COPY . .

RUN pip install --no-cache-dir flask

CMD [ "python3" , "app.py" ]
FROM python:3.8.3-alpine

# set work directory
WORKDIR /PYTHON_JOB_WEBSITE
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
#psycopg handle
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev
# install dependencies
RUN pip install --upgrade pip
# copy project
COPY . .
RUN pip install -r requirements.txt

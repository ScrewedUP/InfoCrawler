from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ndtvNews import *
from fastapi.responses import JSONResponse

from indiaTodayNews import *
from indianExpress import *
from indiaTvNews import *

# from src.pythonFiles.draft1 import newsndtvscrapper

app = FastAPI()


# origins = [
#     "http://localhost",
#     "http://localhost:8000",
#     "http://localhost:3000",
#     # "https://myapp.herokuapp.com",
# ]
#
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


@app.get("/NDTV")
async def run_script():
    result = newsndtvscrapper()
    return {"result": result}


@app.get("/India_Today")
async def run_script():
    result = newsindiatodayscrapper()
    return {"result": result}


@app.get("/Indian_Express")
async def run_script():
    result = newsindianexpressscrapper()
    return {"result": result}

@app.get("/India_Tv")
async def run_script():
    result = newsindiatvnewsscrapper()
    return {"result": result}
from fastapi import FastAPI 

app = FastAPI()

@app.get('/')
def index():
    return {'data' : {'name': 'SeaHawk'}}

@app.get('/about')
def about():
    return {'about' : {'about page'}}


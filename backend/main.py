from fastapi import FastAPI
from router.giveaway import giveaways
from configs.middleware import cors_setup

app = FastAPI()
cors_setup(app)
app.include_router(giveaways, prefix='/giveaway', tags=["giveaway"])
@app.get('/health')
async def health_check():
    return {"message": "Server is Live"}
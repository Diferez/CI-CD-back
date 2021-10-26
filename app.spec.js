import app from './app.js'
import request from 'supertest'


describe('GET /task',()=>{
    test('Should respond with a 200 status code', async ()=>{
        const response = await request(app).get('/mascota').send();
    expect(response.statusCode).toBe(200);
    
    });
    test('Should be respond with an array', async ()=>{
        const response = await request(app).get('/mascota').send()
    expect(response.body).toBeInstanceOf(Array)
    })

    test('Should respond with status 200 code', async () =>{
        const response = await request(app).get('/mascota5').send()
    expect(response.statusCode).toBe(404);
    })

    test('Should respond with status 200 code', async () =>{
        const response = await request(app).get('/crear').send()
    expect(response.statusCode).toBe(404);
    })

    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
      });


    describe('POST /task2',()=>{

        test('Should respond with status 200 code', async () =>{
            const response = await request(app).get('/mascota').send()
        expect(response.statusCode).toBe(200);
        })

    })
});
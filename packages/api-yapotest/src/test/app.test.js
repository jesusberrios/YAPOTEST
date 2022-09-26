
const app = require('../app');
const express = require('express');
const supertest = require('supertest');


describe('e2e test', () => {
    it('to return 400', async () => {
        const response = await supertest(app).get('/searchTrack').set('name','radiohead')
        expect(response.status).toEqual(400)
        expect(response.body).toStrictEqual({})

    })
})
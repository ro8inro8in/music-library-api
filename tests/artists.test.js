const { expect } = require ('chai');
const request = require ('supertest');
const { Artist } = require('../src/models');
const app = require('../src/app');

describe('/artists', () => {
    
    before(async () => {
        try {
            await Artist.sequelize.sync();
        }   catch (err) {
            console.log(err);
        }
      });

    beforeEach(async () => {
        try {
            await Artist.destroy({ where: {} });
        }   catch (err) {
            console.log(err);
        }
      });

    describe('POST /artists', async () => {
        it('creates a new artist in the database', async () => {
            const response = await request(app).post('/artists').send({
                name: 'Tame Impala',
                genre: 'Rock',
            });

        await expect(response.status).to.equal(201);   
        });
    });
})
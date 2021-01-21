const chai = require('chai');
const server = require('../../src/server');
let chaiHttp = require('chai-http');

//assertion
chai.should();

chai.use(chaiHttp);

describe('Comment API',()=>{
    
    describe("GET /api/comments", ()=>{
        it("It should GET all the comments", (done)=>{
            chai.request(server)
            .get('/api/comments')
            .end((err, resp)=>{
                resp.should.have.status(200);
                resp.body.should.be.a('array');
                done();
            })
        })

        it("It should NOT GET all the comments", (done)=>{
            chai.request(server)
            .get('/api/comment')
            .end((err, resp)=>{
                resp.should.have.status(404);
                // resp.body.should.be.a('array');
                done();
            })
        })
    })
})






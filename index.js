const {Readable,Writable,Transform} = require('stream');

var graph = require('fbgraph');
graph.setAccessToken('1779442635683352|5-UB1zvT0GohCqe2scAHkbH0ZJw');


class ReadObj extends Readable{
    constructor(arrayData,opt={}){
        super(opt)
        this._arrayData=arrayData;
        this.on('data',(chunk)=>{console.log(chunk)});
        this.on('end',()=>{console.log('end')});
    }

    _read(){
        let data=this._arrayData.shift();
        if(data){
            this.push(data);
        }else{
            this.push(null);
        }
    }
}

let opts = {objectMode:true};
graph
.get("/search?q=Russia&type=page&limit=25", function(err, res) {
var obj = res; 
const R = new ReadObj(obj.data,opts); 

});





let pool = require('./pool');

module.exports={
	//查询所有
  findAll(){
    let sql = "select * from course";
    return pool.execute(sql);
  },
	//通过id查询
  findById(id){
    let sql = "select * from course where id = "+id;
    return pool.execute(sql);  
  },
  //删除
  batchDelete(ids){
    let sql = "delete from course where id in ("+ids.join()+")";
    return pool.execute(sql);
  },
}
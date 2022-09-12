function Showtodolist(){
      var task=[]
    for (let i = 0; i < window.localStorage.length; i++){
task.push(window.localStorage.getItem(i));
    }
    var newarray=[];
   newarray =  task.map(function(d, idx){
        return(
        <li> {d}</li>
        )
    });

    return (
        <div>
            <ul>
                <li>
          <h1>{newarray}</h1> 
          </li>
          </ul></div>
    )
}
export default Showtodolist;
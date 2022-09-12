function Showtodolist(){
return(
    <div>
    <h1>SHow to do lists</h1>
    {window.localStorage.getItem(1)}
    </div>
)
}
export default Showtodolist;
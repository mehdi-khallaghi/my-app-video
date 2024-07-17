export default function AddUser(){

    return (
        <div className="py-2">
            <input type="text" className="input-adduser" placeholder="enter name..."/>
            <input type="text" className="input-adduser" placeholder="enter username..."/>
            <button className="btn btn-success">add user</button>
        </div>
    );
}
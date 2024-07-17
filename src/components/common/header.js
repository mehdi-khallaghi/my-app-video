import { useState } from "react";

export function Header() {

    const [value, setValue] = useState('');

    const changeText = (e) => {
        setValue(e.target.value);
    }

    const searchFun = ()=>{ //دراینجا باید با یک apiجستجو کند که ما از یک الارت ساده استفاده کردیم
        alert(value);
    }

    return (
        <div className="header p-2" style={{textAlign:"center"}}>
            <input type="text" className="input-search mx-2" onChange={changeText} placeholder="لطفا نام فیلم را وارد کنید..." />
            <button className="btn btn-primary mb-1" onClick={searchFun}>جستجو</button>
        </div>
    )
}
      
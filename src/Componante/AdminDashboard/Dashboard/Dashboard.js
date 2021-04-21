import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="container-fluid row">
            <Sidebar/>
            <div className="col-xl-10 col-md-6 col-sm-6 pl-0 pr-0">
                <h2 className="text-center py-2 text-white" style={{backgroundImage: "linear-gradient(40deg, hsl(197, 100%, 38%),#0d8196)"}}>DASHBOARD</h2>
                <div style={{margin: "0 50px"}} className="text-dashboard mt-5">
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minus ratione iste nostrum, non mollitia nemo vero sequi aliquid? Facilis omnis modi nostrum? Ducimus placeat, tenetur laudantium nulla enim veritatis aliquam, provident soluta in eveniet corrupti odit explicabo dignissimos! Fugiat nostrum nobis amet voluptatibus dolorum veniam fuga harum voluptatem sequi ipsa, quos illo vero reiciendis magnam deleniti a quaerat tempore adipisci! Harum odio voluptate dolores, porro, provident, doloremque modi illum nostrum natus eos sit praesentium earum nobis? Cum voluptates labore sapiente sunt unde architecto consequatur veritatis laboriosam accusamus vero, neque quo doloremque tempore temporibus reiciendis laudantium? Unde reprehenderit voluptatibus ullam.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
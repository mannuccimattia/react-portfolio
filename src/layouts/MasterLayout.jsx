import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const MasterLayout = () => {
    return (
        <div id="app">
            <div className="container-fluid">
                <div className="row text-light">
                    <div className="col-12 col-lg-5">
                        <Header />
                    </div>
                    <div className="col-12 col-lg-7">
                        <main>
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterLayout

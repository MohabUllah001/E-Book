import React from 'react';
import LeftBar from '../../Components/Shared/LeftBar';
import profileImage from '../../../Pictures/AdobeStock_295454197_bw_cropped_blue_v_narrow.png'
import { Outlet } from 'react-router-dom';
import NavBar from '../../Components/NavBar/navBar';

const UserDash = () => {
    const menus = [
        {
            "name": "Wish List",
            "link": "/userDash"
        },
        {
            "name": "Book List",
            "link": "/userDash/userBookList"
        },
        {
            "name": "Apply as a Author",
            "link": "/userDash//applyAsaAthor"
        }
    ]

    return (
        <div>
        <div className="">
            <NavBar/>
            <div className="flex gap-5">
            <LeftBar image={profileImage} name={"Mr. David"} email={"david@gmail.com"} menus={menus} />
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
        </div>
    );
};

export default UserDash;
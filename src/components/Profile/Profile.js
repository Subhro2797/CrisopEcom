import React from 'react';
import ProfileModal from '../ProfileModal/ProfileModal';


const Profile = (props) => {
    const { show, onHide } = props;

    return (
        <div>
            <ProfileModal show={show} onHide={onHide}></ProfileModal>
        </div>
    )
};

export default Profile;
import React, { useEffect, useState } from 'react';
import { MultiChatWindow, MultiChatSocket, useMultiChatLogic } from 'react-chat-engine-advanced';
import { useLocation } from 'react-router-dom';
import "./style.css";

const ChatsPage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const { state } = useLocation();
    const userToken = state.userToken;
    const userid = state.userid;

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/user/${userid}/details`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch user details: ${response.statusText}`);
                }

                const data = await response.json();
                setUserDetails(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [userToken, userid]);

    console.log(userDetails);

    const chatProps = useMultiChatLogic(
        "chatengineprojectapi",
        userDetails?.email,
        userDetails?.secret
    );
    useEffect(() => {
        if (userDetails?.email && userDetails?.secret) {
            chatProps.onConnect();
        }
    }, [chatProps, userDetails]);
    if (loading) {
        // Render a loading indicator if needed
        return <div>Loading...</div>;
    }

    return (
        <div style={{ height: "100vh", width: "100vw", backgroundColor: 'black', color: 'black' }}>
            <MultiChatWindow {...chatProps} />
            <MultiChatSocket {...chatProps} />
        </div>
    );
};

export default ChatsPage;

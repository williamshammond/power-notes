import React from "react";

interface Props {
    readonly content: string;
}

export const LeftMenu = function LeftMenu({ content }: Props) {
    const [message, setMessage] = React.useState("");

    React.useEffect(() => {
        fetch("http://localhost:3000/")
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => setMessage(data.testMessage));
    }, []);

    console.log(message);

    return (
        <div>
            {content}
            {message}
        </div>
    );
};

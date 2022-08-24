import { Store } from "react-notifications-component";

export const showNotification = (type, message) => {
	let title;
	if (type === "success") title = "Success";
	else if (type === "warning") title = "Warning";
	else if (type === "error") title = "Error";

	Store.addNotification({
		title: title,
		message: message,
		type: type,
		insert: "bottom",
		container: "bottom-right",
		animationIn: ["animate__animated", "animate__fadeIn"],
		animationOut: ["animate__animated", "animate__fadeOut"],
		dismiss: {
			duration: 5000,
			onScreen: true,
		},
	});
};

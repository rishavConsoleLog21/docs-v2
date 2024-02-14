import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "ConnectWallet",
		icon: "react",
	});
}
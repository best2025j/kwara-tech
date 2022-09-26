import { useRouter } from "next/router";
import useAuth from "./auth";

export function withPublic(Component) {
	return function WithPublic(props) {
		const auth = useAuth();
		const router = useRouter();
		if (auth.user?.id) {
			router.replace("/");
			return <h1>Loading...</h1>;
		}
		return <Component auth={auth} {...props} />;
	};
}

export function withProtected(Component) {
	return function WithPublic(props) {
		const auth = useAuth();
		const router = useRouter();

		if (!auth.user?.id) {
			router.replace("/signin");
			return <h1>Loading...</h1>;
		}
		return <Component auth={auth} {...props} />;
	};
}

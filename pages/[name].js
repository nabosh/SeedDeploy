import { useRouter } from "next/router";

const Name = () => {
    const router = useRouter();
    const {name} = router.query;
    return <p>Hi {name}</p>
}

export default Name;
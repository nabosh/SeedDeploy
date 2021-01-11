import { useRouter } from "next/router";

const Name = () => {
    const router = useRouter();
    const {name} = router.query;
    return (
        <div>
          <p>Hey Hey Hey, {name}</p>
        </div>
    )
}

export default Name;
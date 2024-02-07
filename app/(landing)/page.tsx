import { Button } from "@/components/ui/button"
import Link from "next/link"

function page() {
    return (
        <div>
            Landing page (unprotected)

            <div>
                <Link href="sign-in">
                    <Button>
                        Log in
                    </Button>
                </Link>

                <Link href="sign-up">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>

        </div>
    )
}
export default page
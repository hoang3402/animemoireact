import Image from "next/image";

import {Domain} from "@/app/domain";
import Link from "next/link";

export default async function Page(params: any) {
    const response = await fetch(
        `${Domain}${params.params.host}/ChapterDetail?url=${params.searchParams.id}`
    );
    const data = await response.json();

    return (
        <>
            <button>
                <Link href={`/pages/home/${params.params.host}`}>Back</Link>
            </button>
            <div className={'flex flex-col items-center'}>
                {data.map((chapter: any) => (
                    <Image
                        key={chapter}
                        src={`${Domain}${params.params.host}/GetImage?url=${chapter}`}
                        alt={''}
                        width={'1000'}
                        height={'1000'}
                    ></Image>
                ))}
            </div>
        </>
    );
}
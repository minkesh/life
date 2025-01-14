import React from 'react';
import { parametreize, statesStaticPaths, humanize } from '@lib/utils';
import { NextSeo } from 'next-seo';
import DetailedHome from '@components/DetailedHome';

export default function State({ state }) {
    const SEO = {
        title: `${humanize(state)} | Coronasafe network`,
        description: `Covid19 Resources for ${humanize(state)} `,
        openGraph: {
            title: `${humanize(state)} | Coronasafe network`,
            description: `Covid19 Resources for ${humanize(state)} `
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi,${humanize(
                    state
                )},hospital,ambulance,helpline,oxygen,medicine`
            }
        ]
    };
    return (
        <>
            <NextSeo {...SEO} />
            <DetailedHome state={humanize(state)} />
        </>

    );
}

export async function getStaticProps({ params }) {
    return {
        props: {
            state: parametreize(params.state)
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: statesStaticPaths(),
        fallback: false
    };
}

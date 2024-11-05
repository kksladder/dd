import Section from '@/components/layout/Section';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Section tit="섹션1" desc="aaa">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </Section>
            <Section tit="섹션2" desc="bbbbb" bg="gray"></Section>
            <Section tit="섹션3" desc="ccccc"></Section>
            <Section tit="섹션4" bg="gray"></Section>
        </>
    );
}

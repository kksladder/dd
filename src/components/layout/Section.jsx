import React, { Children } from 'react';

const Section = ({ tit, desc, children, bg }) => {
    return (
        /* {조건 ? 참 : 거짓} */
        <section className={`sec-g ${bg ? 'bg-gray' : ''}`}>
            <div className="inner">
                <h2 className="sec-g__tit">{tit}</h2>
                {/* 조건 && 참일 경우만 출력 */}
                {desc && <p className="sec-g__desc">{desc}</p>}

                <div className="sec-g__cont">{children}</div>
            </div>
        </section>
    );
};

export default Section;

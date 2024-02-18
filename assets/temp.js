function bd() {
    const {title: e, description: t, experiences: n, education: k} = dc;
    return v.jsxs("div", {
        className: "about-container",
        children: [v.jsx("h2", {
            className: "about-title",
            children: e
        }), 
        v.jsxs("p", {
            className: "about-description",
            children: [t, 
            //     " Follow my ", 
            //     v.jsx("a", {
            //     className: "instagram",
            //     href: "https://www.instagram.com/mirayatech",
            //     target: "_blanket",
            //     children: "Instagram"
            // }), " to see my journey."
            ]
        }),
        v.jsx(Jd, {}), v.jsxs("div", {
            className: "about-experience-section",
            children: [v.jsx("h2", {
                className: "about-experience-heading",
                children: "Work Experience"
            }), n.map((r,l)=>v.jsx(qd, {
                date: r.date,
                title: r.title,
                company: r.company,
                description: r.description,
                technologies: r.technologies
            }, l))],
        }), v.jsxs("div", {
            className: "about-experience-section",
            children: [v.jsx("h2", {
                className: "about-experience-heading",
                children: "Education"
            }), k.map((r,l)=>v.jsx(edd, {
                date: r.date,
                title: r.title,
                uni: r.uni,
                description: r.description
            }, l))],
        }), v.jsx("div", {
            className: "about-experience-section download-button",
            children: [v.jsx("p", {
                children: "Download my CV here"
            }), v.jsx(dw, {})]
        })]
    })
}
function ap() {
    return v.jsxs("div", {
        className: "projects-container",
        children: [v.jsx("h2", {
            className: "projects-headline",
            children: Ju.title
        }), v.jsx("div", {
            className: "projects-wrapper",
            children: Ju.projects.map(e=>v.jsxs("a", {
                href: e.github,
                className: "projects-card",
                target: "_blank",
                children: [v.jsx("div", {
                    className: "bar",
                    children: [ v.jsx("div", {
                        className: "red"
                    }),v.jsx("div", {
                        className: "yellow"
                    }),v.jsx("div", {
                        className: "green"
                    })]
                }), v.jsx("div", {
                    className: "screen",
                    children: [// v.jsx("div", {
                        //     className: "projects-card-gardient"
                        // }), 
                        v.jsxs("div", {
                            className: "projects-card-links",
                            children: [] // [v.jsx("a", {
                            //     href: e.github,
                            //     target: "_blank",
                            //     children: v.jsx(hc, {})
                            // }), v.jsx("a", {
                            //     href: e.live,
                            //     target: "_blank",
                            //     children: v.jsx(op, {})
                            // })]
                        }), v.jsx("h3", {
                            className: "projects-card-name",
                            children:[] // e.name
                        }), v.jsx("div", {
                            className: "projects-card-languages",
                            children: [] // e.languages.map(t=>v.jsx("span", {
                                // children: t
                            // }, t))
                        })]
                })]
            }, e.name))
        })]
    })
}
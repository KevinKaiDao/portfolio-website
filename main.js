/* ==========================================================================
   Kevin Dao — Portfolio
   Progressive enhancement only: the page is fully readable without this file.
   ========================================================================== */
(function () {
    "use strict";

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ----------------------------------------------------------------------
       Footer year
       ---------------------------------------------------------------------- */
    var yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    /* ----------------------------------------------------------------------
       Mobile navigation
       ---------------------------------------------------------------------- */
    var toggle = document.querySelector(".nav-toggle");
    var navLinks = document.getElementById("nav-links");

    if (toggle && navLinks) {
        var setOpen = function (open) {
            toggle.setAttribute("aria-expanded", String(open));
            navLinks.classList.toggle("is-open", open);
        };

        toggle.addEventListener("click", function () {
            setOpen(toggle.getAttribute("aria-expanded") !== "true");
        });

        // Close after tapping a link on mobile.
        navLinks.addEventListener("click", function (event) {
            if (event.target.closest("a")) {
                setOpen(false);
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                setOpen(false);
            }
        });
    }

    /* ----------------------------------------------------------------------
       Sticky nav border once scrolled past the top
       ---------------------------------------------------------------------- */
    var navbar = document.getElementById("navbar");
    if (navbar) {
        var updateStuck = function () {
            navbar.classList.toggle("is-stuck", window.scrollY > 8);
        };
        updateStuck();
        window.addEventListener("scroll", updateStuck, { passive: true });
    }

    /* ----------------------------------------------------------------------
       Scroll spy — highlight the section currently in view
       ---------------------------------------------------------------------- */
    var spyLinks = Array.prototype.slice.call(
        document.querySelectorAll('.nav-links a[href^="#"]')
    );
    var sections = spyLinks
        .map(function (link) {
            return document.querySelector(link.getAttribute("href"));
        })
        .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
        var spy = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) {
                        return;
                    }
                    spyLinks.forEach(function (link) {
                        link.classList.toggle(
                            "is-active",
                            link.getAttribute("href") === "#" + entry.target.id
                        );
                    });
                });
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach(function (section) {
            spy.observe(section);
        });
    }

    /* ----------------------------------------------------------------------
       Scroll reveal
       ---------------------------------------------------------------------- */
    var revealTargets = document.querySelectorAll(
        ".section-head, .about-prose, .about-facts, .timeline-item, .cap-card, " +
        ".project-featured, .project-card, .contact-lede, .contact-list"
    );

    if (reduceMotion || !("IntersectionObserver" in window)) {
        // No animation: leave everything visible as authored.
    } else {
        Array.prototype.forEach.call(revealTargets, function (el, index) {
            el.classList.add("reveal");
            // Stagger siblings slightly so grids cascade instead of popping.
            el.style.transitionDelay = (index % 5) * 60 + "ms";
        });

        var revealObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        );

        Array.prototype.forEach.call(revealTargets, function (el) {
            revealObserver.observe(el);
        });
    }

})();

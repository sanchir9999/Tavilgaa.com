import Link from "next/link";

export const Footer = () => {
    return (
        <footer id="contact" className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-8 border-t border-black/5 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Лого / нэр */}
                <div>
                    <h2 className="text-xl font-bold mb-2">Tavilgaa.com</h2>
                    <p className="text-sm text-gray-400">
                        Монголд <strong>оффис тавилга</strong>, <strong>ширээ сандал</strong>,
                        <strong> gaming сандал</strong> худалдах онлайн дэлгүүр.
                        Улаанбаатарт хүргэлттэй.
                    </p>
                    <p className="mt-2 text-xs text-gray-500">&copy; {new Date().getFullYear()} Бүх эрх хуулиар хамгаалагдсан.</p>
                </div>

                {/* Холбоо барих */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Холбоо барих</h3>
                    <p className="text-sm">
                        Утас: <a href="tel:+97688175658" className="hover:text-white">+976 88175658</a><br />

                        Утас: <a href="tel:+97699917208" className="hover:text-white">+976 99917208</a><br />
                        Имэйл: <a href="mailto:info@Tavilgaa.com" className="hover:text-white">info@Tavilgaa.com</a>
                    </p>
                </div>

                {/* Хурдан холбоосууд */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Хурдан холбоос</h3>
                    <ul className="text-sm space-y-1">
                        <li>
                            <Link href="/" className="hover:text-white">Нүүр</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-white">Бүтээгдэхүүн</Link>
                        </li>
                        <li>
                            <Link href="/About" className="hover:text-white">Бидний тухай</Link>
                        </li>
                    </ul>
                </div>

                {/* Сошиал iframe хэсэг */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Сошиал</h3>


                    <div className="mt-2">
                        <iframe
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61565050778397&tabs&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                            width="300"
                            height="130"
                            className="rounded-xl"  // ЭНЭ хэсгийг нэмэв
                            style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>

                    {/* Instagram feed iframe */}
                    <div className="mt-4">
                        <iframe
                            src="https://www.instagram.com/halada_shop/embed"
                            width="300"
                            height="130"
                            className="rounded-xl"  // ЭНЭ хэсгийг нэмэв
                            style={{ border: 'none', overflow: 'hidden' }}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>

                </div>

            </div>
        </footer>
    );
};

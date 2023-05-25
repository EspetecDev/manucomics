export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return(
        <section>
            {/* include header here */}
            <nav></nav>

            {children}
        </section>
    );
}
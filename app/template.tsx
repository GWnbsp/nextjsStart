
"use client"
export default function AppTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="border-2 border-dashed border-blue-400 p-4  mx-auto mt-4">
            AppTemplate
            {children}
        </div>

    );
}

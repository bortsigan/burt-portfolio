<template>
    <div class="flex flex-col min-h-screen bg-gray-950 text-gray-100">

        <!-- NAVBAR -->
        <header class="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800 px-6 py-4 flex justify-between items-center">
            <h1 class="font-bold text-xl text-green-500">BURT<span class="text-gray-400">.dev</span></h1>

            <nav class="hidden md:flex space-x-8 text-sm font-medium">
                <a href="#about" class="text-gray-300 hover:text-green-500 transition">About</a>
                <a href="#experience" class="text-gray-300 hover:text-green-500 transition">Experience</a>
                <a href="#skills" class="text-gray-300 hover:text-green-500 transition">Skills</a>
                <a href="#contact" class="text-gray-300 hover:text-green-500 transition">Contact</a>
            </nav>
        </header>

        <!-- PAGE CONTENT -->
        <main class="flex-1 max-w-5xl w-full mx-auto px-6 py-12">
            <slot />
        </main>

        <!-- FOOTER -->
        <footer class="border-t border-gray-800 px-6 py-8 text-center text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Burt Karl Cabigas. Web Developer based in Philippines.
        </footer>

    </div>
</template>
<script setup>

</script>
<template>
    <div class="flex flex-col items-center bg-black text-white py-12 bg-about-pattern bg-cover">
        <UniversalScrollMouse />
        <div class="flex flex-col md:flex-row justify-between mt-24 lg:mt-36 lg:mb-24  md:max-w-7xl mx-auto gap-8 md:gap-24 px-4">
            <div class="flex flex-col gap-4 w-full md:w-1/2">
                <div class="border-4 border-teal-500 rounded-ss-3xl rounded-br-2xl px-6 py-3 w-fit">
                    <h1 class="text-4xl text-white ubuntu">About Me</h1>
                </div>
                <div class="bg-gray-700 rounded-xl p-4 w-96 md:w-[100%]">
                    <h3 class="text-teal-500">Hello !</h3>
                    <p class="text-wrap">
                        My name is Kato Emmanuel and I specialize in web and mobile application development that utilizes <br> HTML,CSS,JavaScript,Dart.
                        I am a self-taught developer who has been coding for over 3 years now. I have experience working with various technologies and frameworks, and I am always looking for new challenges and opportunities to learn.
                    </p>
                    <p>
                        I am a problem solver who is always looking for ways to improve the efficiency and effectiveness of the code I write. I am also a team player who enjoys collaborating with others to achieve common goals.
                        I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                    </p>
                </div>
            </div>
            <div class="flex justify-center rounded-xl border border-teal-500 w-full md:w-1/2">
                <img src="/public/code.jpg" class="w-full  rounded-xl" alt="A Laptop screen with a programming language IDE">
            </div>
        </div>
    </div>
</template>

<style>
    .ubuntu {
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
</style>

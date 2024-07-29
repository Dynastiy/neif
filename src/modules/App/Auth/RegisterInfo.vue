<template>
  <div class="flex gap-4 flex-col">
    <div class="">
      <h3 class="lg:text-2xl md:text-2xl text-xl font-bold mb-0">
        National Emergency Intervention Fund(NEIF)
      </h3>
      <span class="text-[14px] block font-regular text-gray-500"
        >(Powered by the Federal Government of Nigeria with Samzuga Foundation & Samzuga Business
        Empire)</span
      >
    </div>

    <div class="text-sm">
      <h6>
        The National Emergency Intervention Fund (NEIF) is a specialized financial mechanism
        established by the Federal Government of Nigeria, in collaboration with Samzuga foundation
        and Samzuga Business Empire Ltd to provide swift and effective support to individuals and
        communities affected by the unforeseen economic crises, particularly the present economic
        shock. <b>The fund aims to:</b>
      </h6>

      <ul class="styled my-2">
        <li>Provide immediate financial assistance to vulnerable populations</li>
        <li>Support emergency response and relief efforts</li>
        <li>Promote economic stability and recovery</li>
        <li>Enhance resilience and disaster preparedness</li>
      </ul>

      <p>
        NEIF is designed to be a safety net for Nigerians in times of need, ensuring that no one is
        left behind in the face of f adversity. With a focus on transparency, accountability, and
        efficiency, NEIF is committed to making a meaningful difference in the lives of those who
        need it most.
      </p>

      <p class="my-2">
        There are different packages for private citizens, local government workers, state
        government workers, federal government workers, paramilitary agencies and the military.
      </p>

      <p>Click below to go to the registration form for the private citizens package.</p>

      <button
        class="mt-4 brand-btn w-full flex text-white bg-primary justify-center items-center gap-2"
        type="submit"
        @click="$router.push('/register')"
      >
        Register
      </button>
    </div>
  </div>
</template>

<style>
ul.styled li {
  list-style-type: disc;
  margin-left: 20px;
}
</style>

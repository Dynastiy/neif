<template>
  <div class="bg-white p-6 rounded-md lg:w-6/12 md:w-7/12 w-full mx-auto">
    <div class="">
      <h3 class="font-bold mb-6">Want to send a mail to us?</h3>
    </div>
    <!-- <div>
        <span class="text-xs text-error" v-for="(item, idx) in validationErrors" :key="idx">{{
          item
        }}</span>
      </div> -->
    <vForm @submit="onSubmit" v-slot="{ meta }" class="">
      <div class="flex flex-col gap-4">
        <div>
          <label for="">Email Address</label>
          <vField name="email" rules="email" class="input" type="email"> </vField>
          <ErrorMessage name="email" class="text-xs text-error"></ErrorMessage>
        </div>

        <div>
          <label for="">Description</label>
          <vField name="message" rules="required" class="input" as="textarea" rows="6"> </vField>
          <ErrorMessage name="mesage" class="text-xs text-error"></ErrorMessage>
        </div>
      </div>

      <div class="text-center mt-5">
        <button
          class="brand-btn w-full"
          :disabled="isLoading || !meta.valid"
          :class="[
            isLoading ? 'bg-gray1 text-gray' : meta.valid ? 'brand-primary' : 'bg-gray1 text-black1'
          ]"
        >
          Send
        </button>
        <div class="mt-3"></div>
      </div>
    </vForm>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      isLoading: false
    }
  },

  methods: {
    async onSubmit(values) {
      console.log(values, 'ommmo')
      alert('sent')
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="">
      <h3 class="lg:text-2xl md:text-2xl text-xl font-bold mb-0">Registration Form</h3>
      <span class="text-[14px] block font-regular text-gray-500"
        >Private Citizen's Package(PCP) - $5000</span
      >
    </div>

    <div>
      <div class="flex gap-2">
        <span
          class="block h-[8px] bg-secondary rounded-full"
          :class="[currentStep === 0 ? 'w-[25px]' : 'w-[8px]']"
          @click="prevStep"
          role="button"
        >
        </span>
        <span
          class="block h-[8px] bg-secondary rounded-full"
          :class="[currentStep === 1 ? 'w-[25px]' : 'w-[8px]']"
        ></span>
      </div>
      <span class="text-[13px] font-medium">
        {{ `Step ${currentStep + 1} of ${totalSteps + 1}` }}
      </span>
    </div>

    <div>
      <vForm
        class="mt-4 flex flex-col gap-4"
        @submit="nextStep"
        :validation-schema="currentSchema"
        keep-values
        v-slot="{ meta }"
      >
        <template v-if="currentStep === 0">
          <div class="flex flex-col gap-4">
            <div>
              <label for="">Full Name</label>
              <vField name="name" class="input"> </vField>
              <ErrorMessage name="name" class="text-xs text-error"></ErrorMessage>
            </div>

            <div class="flex gap-4 w-full">
              <div class="w-full">
                <label for="">State</label>
                <vField name="state" v-model="selectedState" as="select" class="input">
                  <option value="">--Select State--</option>
                  <option :value="item" :key="idx" v-for="(item, idx) in states">{{ item }}</option>
                </vField>
                <ErrorMessage name="state" class="text-xs text-error"></ErrorMessage>
              </div>
              <div class="w-full">
                <label for="">LGA</label>
                <vField name="lga" as="select" class="input">
                  <option value="">--Select LGA--</option>
                  <option :value="item" :key="idx" v-for="(item, idx) in lgas">{{ item }}</option>
                </vField>
                <ErrorMessage name="name" class="text-xs text-error"></ErrorMessage>
              </div>
            </div>

            <div>
              <label for="">Council Ward</label>
              <vField name="council_ward" class="input"> </vField>
              <ErrorMessage name="council_ward" class="text-xs text-error"></ErrorMessage>
            </div>

            <div>
              <label for="">Immediate Community</label>
              <vField name="immediate_community" class="input"> </vField>
              <ErrorMessage name="immediate_community" class="text-xs text-error"></ErrorMessage>
            </div>

            <div>
              <label for="">Village</label>
              <vField name="village" class="input"> </vField>
              <ErrorMessage name="village" class="text-xs text-error"></ErrorMessage>
            </div>
          </div>
        </template>

        <template v-if="currentStep === 1">
          <div class="flex flex-col gap-4">
            <div>
              <label for="">NIN</label>
              <vField name="nin" type="tel" class="input"> </vField>
              <ErrorMessage name="nin" class="text-xs text-error"></ErrorMessage>
            </div>

            <div>
              <label for="">Phone Number(NIN Registered)</label>
              <vField name="phone" type="tel" class="input"> </vField>
              <ErrorMessage name="phone" class="text-xs text-error"></ErrorMessage>
            </div>

            <div>
              <label for="">Email</label>
              <vField name="email" class="input"> </vField>
              <ErrorMessage name="email" class="text-xs text-error"></ErrorMessage>
            </div>

            <div>
              <label for="">Clan Head's Name & Signature</label>
              <vField name="clan_head" class="input"> </vField>
              <ErrorMessage name="clan_head" class="text-xs text-error"></ErrorMessage>
            </div>

            <div>
              <label for="">District Head's Signature & Stamp</label>
              <vField name="district_head" class="input"> </vField>
              <ErrorMessage name="district_head" class="text-xs text-error"></ErrorMessage>
            </div>
          </div>
        </template>

        <div class="flex flex-col gap-4 mt-6">
          <button
            class="brand-btn w-full"
            v-if="currentStep !== 1"
            type="submit"
            :disabled="!meta.valid"
            :class="[meta.valid ? 'brand-primary bg-primary' : 'bg-gray1 text-black1']"
          >
            Next
          </button>
          <button
            :disabled="isLoading || !meta.valid"
            :class="[
              isLoading
                ? 'bg-gray1 text-gray'
                : meta.valid
                  ? 'brand-primary bg-primary'
                  : 'bg-gray1 text-black1'
            ]"
            class="brand-btn w-full flex justify-center items-center gap-2"
            v-if="currentStep === 1"
            type="submit"
          >
            <i-icon
              v-if="isLoading"
              icon="eos-icons:three-dots-loading"
              class="text-xl text-gray2"
            />
            <span v-else>Register</span>
          </button>
        </div>
      </vForm>
    </div>
  </div>
</template>

<script>
import * as yup from 'yup'
import { debounce } from 'lodash'
export default {
  components: {},
  data() {
    return {
      isLoading: false,
      validationErrors: {},
      currentStep: 0,
      schemas: [
        yup.object({
          name: yup.string().required(),
          state: yup.string().required(),
          lga: yup.string().required(),
          council_ward: yup.string().required(),
          immediate_community: yup.string().required(),
          village: yup.string().required()
        }),
        yup.object({
          email: yup.string().required().email(),
          phone: yup
            .string()
            .required()
            .matches(/^[0-9]+$/, 'Must be numeric'),
          nin: yup
            .string()
            .required()
            .matches(/^[0-9]+$/, 'Must be numeric')
        })
      ],
      totalSteps: 1,
      states: [],
      lgas: [],
      selectedState: ''
    }
  },

  methods: {
    async onSubmit(values) {
      console.log(values, 'ommmo')
    },

    nextStep(values) {
      if (this.currentStep === 1) {
        alert('submitted')
        this.$router.push('/register/done')
        console.log(values)
        return
      }
      this.currentStep++
    },

    async getStates() {
      try {
        const req = await this.$axios.get('https://nga-states-lga.onrender.com/fetch')
        console.log(req.data)
        this.states = req.data
      } catch (res) {
        console.log(res)
      }
    },

    async getLGA() {
      try {
        const req = await this.$axios.get(
          `https://nga-states-lga.onrender.com/?state=${this.selectedState}`
        )
        console.log(req.data)
        this.lgas = req.data
      } catch (res) {
        console.log(res)
      }
    },

    prevStep() {
      if (this.currentStep <= 0) {
        return
      }
      this.currentStep--
    }
  },

  beforeMount() {
    this.getStates()
  },

  watch: {
    selectedState: {
      handler: debounce(function () {
        this.getLGA()
      }, 500)
    }
  },

  computed: {
    currentSchema() {
      return this.schemas[this.currentStep]
    }
  }
}
</script>

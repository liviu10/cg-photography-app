<template>
  <q-page class="q-mx-xl">
    <div class="text-center q-my-lg">
      <h3>
        {{ t('user.contact_me_page.title') }}
      </h3>
    </div>
    <div class="text-center q-my-lg">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
      >
        <!-- FIRST AND LAST NAME, SECTION START -->
        <q-input
          outlined
          v-model="contactForm.name"
          :label="t('user.contact_me_page.contact_form.name_input.label')"
          :hint="t('user.contact_me_page.contact_form.name_input.hint')"
          class="q-my-lg"
          lazy-rules
          :rules="[
            val => val && val.length > 0 || t('user.contact_me_page.contact_form.name_input.validations.rule_1'),
            val => val.length <= 100 || t('user.contact_me_page.contact_form.name_input.validations.rule_2'),
            val => val = val.match(/^[a-zA-Z_ ]+$/u) || t('user.contact_me_page.contact_form.name_input.validations.rule_3')
          ]"
        />
        <!-- FIRST AND LAST NAME, SECTION END -->

        <!-- EMAIL ADDRESS, SECTION START -->
        <q-input
          outlined
          v-model="contactForm.email"
          :label="t('user.contact_me_page.contact_form.email_input.label')"
          :hint="t('user.contact_me_page.contact_form.email_input.label')"
          class="q-my-lg"
          lazy-rules
          :rules="[
            val => val && val.length > 0 || t('user.contact_me_page.contact_form.email_input.validations.rule_1'),
            val => val.length <= 100 || t('user.contact_me_page.contact_form.email_input.validations.rule_2'),
            val => val = val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || t('user.contact_me_page.contact_form.email_input.validations.rule_3')
          ]"
        />
        <!-- EMAIL ADDRESS, SECTION END -->

        <!-- PHONE NUMBER, SECTION START -->
        <q-input
          outlined
          v-model="contactForm.phone_number"
          :label="t('user.contact_me_page.contact_form.phone_number_input.label')"
          :hint="t('user.contact_me_page.contact_form.phone_number_input.label')"
          class="q-my-lg"
          lazy-rules
          :rules="[
            val => val && val.length > 0 || t('user.contact_me_page.contact_form.phone_number_input.validations.rule_1'),
            val => val.length <= 13 || t('user.contact_me_page.contact_form.phone_number_input.validations.rule_2'),
            val => val = val.match(/^\+(?:[0-9] ?){6,14}[0-9]$/) || t('user.contact_me_page.contact_form.phone_number_input.validations.rule_3')
          ]"
        />
        <!-- PHONE NUMBER, SECTION END -->

        <!-- MESSAGE, SECTION START -->
        <q-input
          outlined
          type="textarea"
          v-model="contactForm.message"
          :label="t('user.contact_me_page.contact_form.message_input.label')"
          :hint="t('user.contact_me_page.contact_form.message_input.label')"
          class="q-my-lg"
          :input-style="{resize: 'none'}"
          rows="10"
          lazy-rules
          :rules="[
            val => val && val.length > 0 || t('user.contact_me_page.contact_form.message_input.validations.rule_1'),
            val => val.length <= 255 || t('user.contact_me_page.contact_form.message_input.validations.rule_2')
          ]"
        />
        <!-- MESSAGE, SECTION END -->

        <q-toggle
          v-model="contactForm.privacy_policy"
          :label="t('user.contact_me_page.contact_form.privacy_policy_input.label')"
          class="q-my-lg"
        />

        <div>
          <q-btn
            :label="t('user.contact_me_page.contact_form.buttons.submit')"
            type="submit"
            color="positive"
          />
          <q-btn
            :label="t('user.contact_me_page.contact_form.buttons.cancel')"
            type="reset"
            color="warning"
            class="q-ml-lg"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ContactMePage',
  setup () {
    const $q = useQuasar()
    const { t } = useI18n()
    const contactForm = ref({
      name: null,
      email: null,
      phone_number: null,
      message: null,
      privacy_policy: false
    })
    return {
      t,
      contactForm,
      onSubmit () {
        if (contactForm.value.privacy_policy !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },
      onReset () {
        contactForm.value.name = null,
        contactForm.value.email = null,
        contactForm.value.phone_number = null,
        contactForm.value.message = null,
        contactForm.value.privacy_policy = false
      }
    }
  }
});
</script>

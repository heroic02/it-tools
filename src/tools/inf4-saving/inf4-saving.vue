<script setup lang="ts">
import { AES, RC4, Rabbit, TripleDES, enc } from 'crypto-js';
import { computedCatch } from '@/composable/computed/catchedComputed';
import { useCopy } from '@/composable/copy';
import { generateKey } from '@/utils/key';

const algos = { AES, TripleDES, Rabbit, RC4 };

const encryptInput = ref('');
const encryptSecret = ref('');
const encryptOutput = ref('');

const { copy: copyEncrypted } = useCopy({ source: encryptOutput, text: 'Sao chép được rồi nhé em iu <3' });

const decryptInput = ref('');
const decryptSecret = ref('');
const decryptOutput = ref('');

const { copy: copyDecrypted } = useCopy({ source: decryptOutput, text: 'Sao chép được rồi nhé em iu <3' });

watch([encryptInput, encryptSecret], async () => {
  const key = await generateKey(encryptSecret.value);
  encryptOutput.value = (algos.AES.encrypt(encryptInput.value, key).toString());
});

watch([decryptInput, decryptSecret], async () => {
  const key = await generateKey(decryptSecret.value);
  const bytes = AES.decrypt(decryptInput.value, key);
  decryptOutput.value = bytes.toString(enc.Utf8);
});
</script>

<template>
  <c-card title="Mã hoá">
    <div flex gap-3 flex-col>
      <c-input-text v-model:value="encryptInput" label="Nhập thông tin: " rows="4" multiline raw-text monospace autosize
        flex-1 />
      <div flex flex-1 flex-col gap-2>
        <c-input-text v-model:value="encryptSecret" label="Mật khẩu:" clearable raw-text />

      </div>
    </div>
    <c-input-text label="Kết quả" :value="encryptOutput" rows="3" multiline monospace readonly autosize mt-5 />
    <div mt-5 flex justify-center>
      <c-button @click="copyEncrypted()">
        Sao chép
      </c-button>
    </div>
  </c-card>
  <c-card title="Giải mã">
    <div flex gap-3 flex-col>
      <c-input-text v-model:value="decryptInput" label="Nhập thông tin: " rows="4" multiline raw-text monospace autosize
        flex-1 />
      <div flex flex-1 flex-col gap-2>
        <c-input-text v-model:value="decryptSecret" label="Mật khẩu:" clearable raw-text />
      </div>
    </div>
    <!-- <c-alert v-if="decryptError" type="error" mt-12 title="Error while decrypting">
      {{ decryptError }}
    </c-alert>
    <c-input-text v-else label="Kết quả" :value="decryptOutput" rows="3" multiline monospace readonly autosize mt-5 /> -->

    <c-input-text label="Kết quả" :value="decryptOutput" rows="3" multiline monospace readonly autosize mt-5 />
    <div mt-5 flex justify-center>
      <c-button @click="copyDecrypted()">
        Sao chép
      </c-button>
    </div>
  </c-card>
</template>

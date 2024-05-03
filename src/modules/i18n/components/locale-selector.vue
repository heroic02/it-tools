<script setup lang="ts">
const { availableLocales, locale } = useI18n();

const localesLong: Record<string, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
  ru: 'Русский',
  uk: 'Українська',
  zh: '中文',
  vi: 'Tiếng Việt',
};

// const localeOptions = computed(() =>
//   // availableLocales.map(locale => ({
//   //   label: localesLong[locale] ?? locale,
//   //   value: locale,
//   // })),
//   [
//     {
//       label: "English",
//       value: 'en',
//     }
//   ]
// );
const localeOptions = [
  {
    label: "English",
    value: 'en',
  },
  {
    label: "Tiếng Việt",
    value: 'vi',
  }
];
</script>

<template>
  <c-select v-model:value="locale" :options="localeOptions" placeholder="Select a language" w-100px />
</template>

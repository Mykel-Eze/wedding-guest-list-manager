<!-- components/FormSection.vue -->
<template>
    <section class="py-20">
        <div class="container mx-auto">
            <h3 class="text-2xl font-bold mb-8 text-center">Guest List Decision Maker</h3>
            <div class="max-w-md mx-auto">
                <div v-if="currentQuestion">
                    <h4 class="text-xl mb-4">{{ currentQuestion.text }}</h4>
                    <div class="space-y-4">
                        <button v-for="option in currentQuestion.options" :key="option.value"
                            @click="handleAnswer(option.value)"
                            class="w-full p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                            {{ option.label }}
                        </button>
                    </div>
                </div>
                <div v-else-if="result" class="text-center">
                    <h4 class="text-2xl font-bold mb-4">{{ result }}</h4>
                    <button @click="resetForm"
                        class="p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                        Start Over
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const questions = [
    {
        id: 'talkLastYear',
        text: 'Have you talked to this person in the last year?',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
        ]
    },
    {
        id: 'spendTimeOutside',
        text: 'Do you spend time with them outside of work?',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
        ]
    },
    {
        id: 'buyDinner',
        text: 'Is it someone you would normally buy dinner for?',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
        ]
    },
    {
        id: 'makeWeddingFun',
        text: 'Will they make your wedding more fun?',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
        ]
    },
    {
        id: 'closeConnection',
        text: 'Do you have a close personal/family connection with this person?',
        options: [
            { label: 'Friend', value: 'friend' },
            { label: 'Family', value: 'family' }
        ]
    },
    {
        id: 'knowPartnerName',
        text: 'Do they know your partner\'s name?',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
        ]
    },
    {
        id: 'parentsWant',
        text: 'Is it someone your parents would want there?',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
        ]
    },
    {
        id: 'parentsPayingFor',
        text: 'Are your parents paying for the wedding?',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
        ]
    }
]

const currentQuestion = ref(questions[ 0 ])
const result = ref(null)

function handleAnswer(answer) {
    if (currentQuestion.value.id === 'talkLastYear' && answer === 'no') {
        result.value = 'Eliminated!'
    } else if (currentQuestion.value.id === 'spendTimeOutside' && answer === 'no') {
        result.value = 'Eliminated!'
    } else if (currentQuestion.value.id === 'buyDinner' && answer === 'no') {
        result.value = 'Eliminated!'
    } else if (currentQuestion.value.id === 'makeWeddingFun' && answer === 'no') {
        result.value = 'Eliminated!'
    } else if (currentQuestion.value.id === 'knowPartnerName' && answer === 'no') {
        result.value = 'Eliminated!'
    } else if (currentQuestion.value.id === 'parentsWant' && answer === 'no') {
        result.value = 'Eliminated!'
    } else if (currentQuestion.value.id === 'parentsPayingFor') {
        result.value = answer === 'yes' ? 'You\'re invited!' : 'Eliminated!'
    } else {
        const nextQuestionIndex = questions.findIndex(q => q.id === currentQuestion.value.id) + 1
        if (nextQuestionIndex < questions.length) {
            currentQuestion.value = questions[ nextQuestionIndex ]
        } else {
            result.value = 'You\'re invited!'
        }
    }
}

function resetForm() {
    currentQuestion.value = questions[ 0 ]
    result.value = null
}
</script>

<style scoped></style>
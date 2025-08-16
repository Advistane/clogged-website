<template>
    <div class="flex space-y-4 w-full justify-center items-center">
        <form @submit="onSubmit" class="space-y-8 w-[500px] justify-center items-center border-[3px] border-[#7a5d3b] p-4">
            <FormField v-slot="{ componentField }" name="groupName">
                <FormItem>
                    <FormLabel>
                        Group Name
                    </FormLabel>

                    <FormControl>
                        <Input type="text" v-bind="componentField" />
                    </FormControl>

                    <FormDescription>
                        You will have to type this in-game, so make it appropriate.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="joinSettings">
                <FormItem>
                    <FormLabel>
                        Join Settings <span class="text-xs text-gray-500">(This can be changed later)</span>
                        <HoverCard>
                            <HoverCardTrigger>
                                <span class=" bg-[#7a5d3b] text-[#f5deb3] rounded-full w-40 h-40 cursor-help transition-colors"><HelpCircle class="w-4 h-4" /></span>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80 bg-[#3a2c1a] border-[#7a5d3b] text-[#f5deb3]">
                                <div class="space-y-2">
                                    <h4 class="text-sm font-semibold">Join Settings Information</h4>
                                    <p class="text-sm">
                                        Public: Anyone can join without approval.
                                    </p>
                                    <p class="text-sm">
                                        Apply: Anyone can request to join but must be approved by a group admin.
                                    </p>
                                    <p class="text-sm">
                                        Closed: Do not allow any requests to join.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </FormLabel>

                    <FormControl>
                        <Select v-bind="componentField">
                            <SelectTrigger class="w-full">
                                <SelectValue placeholder="Select access settings" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Access Settings</SelectLabel>
                                    <SelectItem value="public">
                                        Public
                                    </SelectItem>
                                    <SelectItem value="apply">
                                        Apply
                                    </SelectItem>
                                    <SelectItem value="closed">
                                        Closed
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </FormControl>
                </FormItem>
            </FormField>

            <Button type="submit">
                Submit
            </Button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod'

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { HelpCircle } from 'lucide-vue-next';

enum JoinSettings {
    PUBLIC = 'public',
    APPLY = 'apply',
    CLOSED = 'closed',
}

const formSchema = toTypedSchema(z.object({
    groupName: z.string().min(3).max(32),
    joinSettings: z.nativeEnum(JoinSettings)

}));

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
    console.log('Form submitted!', values)
})
</script>

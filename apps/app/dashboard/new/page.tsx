"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { personaSchema } from "@/db/schema";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreatePersonaPage() {

  const personaCreateForm = useForm<z.infer<typeof personaSchema>>({
    resolver: zodResolver(personaSchema),
    defaultValues: {
      category: 'cat1',
      description: '',
      example_conversation: '',
      image: '',
      instructions: '',
      name: '',
    },
  })

  function onSubmit(values: z.infer<typeof personaSchema>) {
    console.log('fot it')
    console.log(values)
  }

  return (
    <Form {...personaCreateForm} >
      <form onSubmit={personaCreateForm.handleSubmit(onSubmit)}>
        <section className="py-2 max-sm:py-1 max-w-screen-md mx-auto">
          <div>
            <h3 className="text-lg font-medium">General Information</h3>
            <p className="text-sm text-muted-foreground">
              General Details about persona you want to create.
            </p>
            <Separator className="my-2" />
          </div>
          <FormField
            control={personaCreateForm.control}
            name="image"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Avatar</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display image.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personaCreateForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Bunny AI" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personaCreateForm.control}
            name="description"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="This AI will treat you as best friend!" {...field} />
                </FormControl>
                <FormDescription>
                  What your persona does.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personaCreateForm.control}
            name="category"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {['cat1', 'cat2', 'cat3'].map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Type of persona.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <h3 className="text-lg font-medium">Configuration</h3>
            <p className="text-sm text-muted-foreground">
              Detailed Instruction for 'AI Behavior'.
            </p>
            <Separator className="my-2" />
          </div>
          <FormField
            control={personaCreateForm.control}
            name="instructions"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Instructions</FormLabel>
                <FormControl>
                  <Textarea placeholder="Long details copy from" {...field} />
                </FormControl>
                <FormDescription>
                  Full Details of how your persona should behave.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personaCreateForm.control}
            name="example_conversation"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Example Conversation</FormLabel>
                <FormControl>
                  <Textarea placeholder="Long details copy from" {...field} />
                </FormControl>
                <FormDescription>
                  Chat format of how persona should react in chats.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="my-4 grid place-items-center">
            <Separator className="my-2" />
            <Button type="submit" className="text-white">Create Persona</Button>
          </div>
        </section>
      </form>
    </Form>
  );
}
